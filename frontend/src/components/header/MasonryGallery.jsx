import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import SocialCard from "./SocialCard";
import img1 from "../../assets/a1.jpg";
import img2 from "../../assets/a2.jpg";

const cards = [
  { id: 1, image: img1, icon: "TT", bottomText: "New Hit" },
  { id: 2, image: img2, icon: "IG", bottomText: "#5 UK Charts" },
  { id: 3, image: img1, icon: "IG", bottomText: "Artist 1" },
  { id: 4, image: img2, icon: "TT", bottomText: "New Hit" },
  { id: 5, image: img1, icon: "IG", bottomText: "#5 UK Charts" },
  { id: 6, image: img2, icon: "YT", bottomText: "Rising Star" },
  { id: 7, image: img1, icon: "SC", bottomText: "Hot Track" },
  { id: 8, image: img2, icon: "IG", bottomText: "Collab Drop" },
  { id: 9, image: img1, icon: "YT", bottomText: "Fan Favorite" },
  { id: 10, image: img2, icon: "SC", bottomText: "Top 10" },
];

export default function MasonryGallery() {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  return (
    <Masonry
      breakpointCols={{ default: 5, 1024: 3, 768: 2 }}
      className="flex gap-5 p-6"
      columnClassName="space-y-5"
    >
      {cards.map((card, index) => {
        // Add margin only to the first row cards (based on your total column count)
        const isFirstRow = Math.floor(index / 5) === 0;
        const isSecondRow = Math.floor(index / columns) === 1;

        return (
          <div
            key={card.id}
            className={`break-inside-avoid ${isFirstRow && index % 2 === 0 ? "mt-30" : ""}`}
            style={
              isSecondRow
                ? {
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black , transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black , transparent 100%)",
                  }
                : {}
            }
          >
            <SocialCard {...card} />
          </div>
        );
      })}
    </Masonry>
  );
}
