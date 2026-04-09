interface AdPlaceholderProps {
  slot: "top" | "middle" | "bottom" | "sidebar";
  className?: string;
}

export default function AdPlaceholder({ slot, className = "" }: AdPlaceholderProps) {
  const sizes: Record<string, string> = {
    top: "h-24 md:h-28",
    middle: "h-24 md:h-28",
    bottom: "h-24 md:h-28",
    sidebar: "h-64",
  };

  return (
    <div
      className={`w-full ${sizes[slot]} rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center ${className}`}
      role="complementary"
      aria-label="Advertisement"
      data-ad-slot={slot}
    >
      {/* 
        Google AdSense ad unit will be inserted here.
        Replace this placeholder with your actual AdSense code:
        
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      */}
      <span className="text-xs text-muted-foreground/50 select-none">
        Advertisement
      </span>
    </div>
  );
}
