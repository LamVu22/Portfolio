import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [dataNodes, setDataNodes] = useState([]);
  const [dataLinks, setDataLinks] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateDataNetwork();

    const handleResize = () => {
      generateStars();
      generateDataNetwork();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateDataNetwork = () => {
    const numberOfNodes = Math.min(
      28,
      Math.max(14, Math.floor((window.innerWidth * window.innerHeight) / 45000))
    );

    const newNodes = [];

    for (let i = 0; i < numberOfNodes; i++) {
      newNodes.push({
        id: i,
        size: Math.random() * 5 + 4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.35 + 0.25,
        animationDuration: Math.random() * 6 + 6,
      });
    }

    const newLinks = newNodes.slice(0, -1).map((node, index) => {
      const nextNode = newNodes[index + 1];
      const xDistance = nextNode.x - node.x;
      const yDistance = nextNode.y - node.y;

      return {
        id: index,
        x: node.x,
        y: node.y,
        width: Math.sqrt(xDistance ** 2 + yDistance ** 2),
        angle: Math.atan2(yDistance, xDistance) * (180 / Math.PI),
        opacity: Math.random() * 0.18 + 0.08,
      };
    });

    setDataNodes(newNodes);
    setDataLinks(newLinks);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="ai-network">
        {dataLinks.map((link) => (
          <div
            key={link.id}
            className="ai-link"
            style={{
              width: link.width + "%",
              left: link.x + "%",
              top: link.y + "%",
              opacity: link.opacity,
              transform: `rotate(${link.angle}deg)`,
            }}
          />
        ))}

        {dataNodes.map((node) => (
          <div
            key={node.id}
            className="ai-node animate-float"
            style={{
              width: node.size + "px",
              height: node.size + "px",
              left: node.x + "%",
              top: node.y + "%",
              opacity: node.opacity,
              animationDuration: node.animationDuration + "s",
            }}
          />
        ))}
      </div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
