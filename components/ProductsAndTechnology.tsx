import React from 'react';
import { motion } from 'framer-motion';

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
      <div className="text-3xl mb-4 text-[var(--text-main)]">{icon}</div>
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
