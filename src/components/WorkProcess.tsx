import type { LucideIcon } from "lucide-react";
import { ChevronsLeftRight, Lightbulb, Palette, Rocket } from "lucide-react";

export default function WorkProcess() {
  interface MyObject {
    id: number;
    name: string;
    text: string;
    logo: LucideIcon;
  }
  const wpItems: MyObject[] = [
    {
      id: 0o1,
      name: "Discovery",
      text: "Understanding your brand, goals, and target audience to create a solid foundation",
      logo: Lightbulb,
    },
    {
      id: 0o2,
      name: "Design",
      text: "Crafting creative concepts and visual solutions that align with your vision",
      logo: Palette,
    },
    {
      id: 0o3,
      name: "Development",
      text: "Bringing designs to life with attention to detail and technical exellence",
      logo: ChevronsLeftRight,
    },
    {
      id: 0o4,
      name: "Launch",
      text: "Delivering the final product and ensuring a successful implementation",
      logo: Rocket,
    },
  ];
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="wp-sub-container">
          <div className="wp-headings">
            <h2 className="wp-heading">My Work Process</h2>
            <p className="wp-text">
              A structured approach to delivering exceptional design solutions
            </p>
          </div>
          <div className="wp-grid-items">
            <div className="wp-item">
              <div className="wp-item-logo">
                <Lightbulb size={"5rem"} />
              </div>
              <p className="wp-item-number">0{wpItems[0].id}</p>
              <p className="wp-item-heading">{wpItems[0].name}</p>
              <p className="wp-item-text">{wpItems[0].text}</p>
            </div>
            <div className="wp-item">
              <div className="wp-item-logo">
                <Palette size={"5rem"} />
              </div>
              <p className="wp-item-number">0{wpItems[1].id}</p>
              <p className="wp-item-heading">{wpItems[1].name}</p>
              <p className="wp-item-text">{wpItems[1].text}</p>
            </div>
            <div className="wp-item">
              <div className="wp-item-logo">
                <ChevronsLeftRight size={"5rem"} />
              </div>
              <p className="wp-item-number">0{wpItems[2].id}</p>
              <p className="wp-item-heading">{wpItems[2].name}</p>
              <p className="wp-item-text">{wpItems[2].text}</p>
            </div>
            <div className="wp-item">
              <div className="wp-item-logo">
                <Rocket size={"5rem"} />
              </div>
              <p className="wp-item-number">0{wpItems[3].id}</p>
              <p className="wp-item-heading">{wpItems[3].name}</p>
              <p className="wp-item-text">{wpItems[3].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
