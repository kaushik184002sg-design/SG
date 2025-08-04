import React from 'react';
import { motion } from 'framer-motion';

const IconComponent: React.FC<{ type: string }> = ({ type }) => {
  const iconStyle = "w-7 h-7 text-[var(--text-heading)]";
  
  const icons = {
    leaf: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4.42 0 8-3.58 8-8h3.06c-.36 6.51-4.61 9.85-11.06 10v2h2c7.34-.23 13-5.51 13-13V3h-6v5Z"/>
      </svg>
    ),
    mobile: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </svg>
    ),
    lightning: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
      </svg>
    ),
    atom: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    lock: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
    ),
    robot: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z"/>
      </svg>
    ),
    bridge: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 6h2v12H6zm12 0h-2v12h2zm-8 0h4v12h-4z"/>
      </svg>
    ),
    money: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    document: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    chain: (
      <svg className={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2z"/>
        <path d="M8 11h8v2H8z"/>
      </svg>
    ),
  };

  const iconMap: { [key: string]: string } = {
    "🌱": "leaf",
    "📱": "mobile",
    "⚡": "lightning",
    "⚛️": "atom",
    "🔐": "lock",
    "🤖": "robot",
    "🌉": "bridge",
    "💰": "money",
    "📝": "document",
    "🔗": "chain"
  };

  const iconType = iconMap[type] || "chain";
  return icons[iconType] || null;
};

interface CardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const Card: React.FC<CardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-bg)] backdrop-blur-lg hover:bg-[var(--glass-bg)]/50 transition-all duration-300"
    >
      <div className="w-14 h-14 mb-4 rounded-xl bg-[var(--glass-bg)]/80 border border-[var(--glass-bg)] backdrop-blur-md shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 group">
        <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
          <IconComponent type={icon} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">{title}</h3>
      <p className="text-[var(--text-main)] opacity-70 text-sm">{description}</p>
    </motion.div>
  );
};

const ProductsAndTechnology: React.FC = () => {
  const products = [
    {
      title: "Blockchain Core",
      description: "High-performance consensus mechanism with industry-leading TPS and finality.",
      icon: "🔗"
    },
    {
      title: "Smart Contract Platform",
      description: "Advanced smart contract development environment with multiple language support.",
      icon: "📝"
    },
    {
      title: "DeFi Suite",
      description: "Comprehensive tools for building decentralized financial applications.",
      icon: "💰"
    },
    {
      title: "Cross-Chain Bridge",
      description: "Secure and efficient cross-chain asset transfer and communication protocol.",
      icon: "🌉"
    },
    {
      title: "NFT Platform",
      description: "Complete solution for creating, trading, and managing digital assets.",
      icon: "🎨"
    },
    {
      title: "Governance Framework",
      description: "Decentralized governance system for community-driven decision making.",
      icon: "⚖️"
    }
  ];

  const technologies = [
    {
      title: "AI Integration",
      description: "Advanced machine learning algorithms for predictive analytics and optimization.",
      icon: "🤖"
    },
    {
      title: "Zero-Knowledge Proofs",
      description: "Privacy-preserving computation and verification systems.",
      icon: "🔐"
    },
    {
      title: "Quantum Resistance",
      description: "Future-proof cryptographic systems resistant to quantum attacks.",
      icon: "⚛️"
    },
    {
      title: "Layer 2 Scaling",
      description: "Advanced scaling solutions for improved throughput and reduced costs.",
      icon: "⚡"
    },
    {
      title: "IoT Integration",
      description: "Seamless connection with IoT devices and networks.",
      icon: "📱"
    },
    {
      title: "Green Computing",
      description: "Environmentally conscious computing solutions and energy optimization.",
      icon: "🌱"
    }
  ];

  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--text-heading)] mb-4">Products & Technology</h2>
          <p className="text-xl text-[var(--text-main)] opacity-80 max-w-3xl mx-auto">
            Explore our cutting-edge products and advanced technologies that are shaping the future of decentralized systems.
          </p>
        </motion.div>

        {/* Products Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-[var(--text-heading)] mb-8"
          >
            Products
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.title}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-[var(--text-heading)] mb-8"
          >
            Technologies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={tech.title}
                {...tech}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndTechnology;
