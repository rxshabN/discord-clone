"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface LoadingRedirectProps {
  serverId: string;
  initialChannelId: string | undefined;
  shouldRedirect: boolean;
}

const LoadingRedirect = ({
  serverId,
  initialChannelId,
  shouldRedirect,
}: LoadingRedirectProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (shouldRedirect && initialChannelId) {
      router.push(`/servers/${serverId}/channels/${initialChannelId}`);
    } else {
      setIsLoading(false);
    }
  }, [shouldRedirect, initialChannelId, router, serverId]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-1/4 text-center md:max-w-sm">
            <p className="text-lg font-semibold text-black">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingRedirect;
