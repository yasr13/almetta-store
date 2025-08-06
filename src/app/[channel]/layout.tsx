// src/app/[channel]/layout.tsx

import ChannelSwitcher from "./ChannelSwitcher"; // ✅ Tambahkan baris ini

const AVAILABLE_CHANNELS = [
  { slug: "default-channel", name: "Almetta" },
];

export default async function ChannelLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;

  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <ChannelSwitcher 
          currentChannel={channel} 
          channels={AVAILABLE_CHANNELS} 
        />
      </nav>

      <main>{children}</main>
    </div>
  );
}