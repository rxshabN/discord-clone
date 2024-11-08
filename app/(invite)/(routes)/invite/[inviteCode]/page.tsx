// import { currentProfile } from "@/lib/current-profile";
// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// interface InviteCodePageProps {
//   params: {
//     inviteCode: string;
//   };
// }

// const InviteCodePage = async ({ params }: InviteCodePageProps) => {
//   const profile = await currentProfile();
//   if (!profile) {
//     const authInstance = await auth();
//     return authInstance.redirectToSignIn();
//   }
//   if (!params.inviteCode) {
//     return redirect("/");
//   }
//   const existingServer = await db.server.findFirst({
//     where: {
//       inviteCode: params.inviteCode,
//       members: {
//         some: {
//           profileId: profile.id,
//         },
//       },
//     },
//   });
//   if (existingServer) {
//     return redirect(`/servers/${existingServer.id}`);
//   }
//   const server = await db.server.update({
//     where: {
//       inviteCode: params.inviteCode,
//     },
//     data: {
//       members: {
//         create: [{ profileId: profile.id }],
//       },
//     },
//   });
//   if (server) {
//     return redirect(`/servers/${server.id}`);
//   }
//   return null;
// };

// export default InviteCodePage;

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = ({ params }: InviteCodePageProps) => {
  return null; // Since the page logic is handled server-side, we don't need to return anything here.
};

export async function getServerSideProps({
  params,
}: {
  params: { inviteCode: string };
}) {
  const profile = await currentProfile();

  if (!profile) {
    const authInstance = await auth();
    authInstance.redirectToSignIn();
    return { props: {} }; // Will redirect from the server, so we don't need to render anything here.
  }

  if (!params.inviteCode) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return {
      redirect: {
        destination: `/servers/${existingServer.id}`,
        permanent: false,
      },
    };
  }

  const server = await db.server.update({
    where: {
      inviteCode: params.inviteCode,
    },
    data: {
      members: {
        create: [{ profileId: profile.id }],
      },
    },
  });

  if (server) {
    return {
      redirect: {
        destination: `/servers/${server.id}`,
        permanent: false,
      },
    };
  }

  return { props: {} }; // Return empty props if no redirection happened
}

export default InviteCodePage;
