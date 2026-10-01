import { Instagram, Youtube } from "lucide-react";
import { socialLinks } from "../_lib/data";

const icons = {
  instagram: Instagram,
  youtube: Youtube,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => {
        const Icon = icons[social.icon];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white hover:scale-110"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
