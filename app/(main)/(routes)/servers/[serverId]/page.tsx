import LoadingRedirect from "@/components/loading-redirect";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}
const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();
  if (!profile) {
    const authInstance = await auth();
    return authInstance.redirectToSignIn();
  }
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: "general",
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
  const initialChannel = server?.channels[0];
  if (initialChannel?.name !== "general") {
    return null;
  }
  return (
    <LoadingRedirect
      serverId={params.serverId}
      initialChannelId={initialChannel?.id}
      shouldRedirect={initialChannel?.name === "general"}
    />
  );
};

export default ServerIdPage;
