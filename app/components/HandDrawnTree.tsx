import Image from 'next/image';

export default function HandDrawnTree({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo-tree.png"
      alt="Rooted In Relationship logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
