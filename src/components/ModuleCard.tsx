import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  path: string;
  delay?: number;
  className?: string;
  bgColor?: string;
  iconBgColor?: string;
  iconColor?: string;
  decoration?: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ 
  title = "模块名称", 
  subtitle = "副标题", 
  icon: Icon, 
  path = "/",
  delay = 0,
  className = "",
  bgColor = "bg-card",
  iconBgColor = "bg-[rgba(240,240,240,1)]",
  iconColor = "text-foreground",
  decoration
}) => {
  return (
    <Link 
      to={path}
      data-cmp="ModuleCard"
      className={`group relative overflow-hidden ${bgColor} glass-effect border-2 border-white rounded-[2rem] p-5 shadow-custom hover:shadow-hover transition-all duration-400 hover:-translate-y-1.5 flex flex-col animate-in fade-in slide-in-from-bottom-8 ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {/* Optional decorative element (like an emoji or shape) */}
      {decoration && (
        <div className="absolute -right-2 -top-2 opacity-80 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          {decoration}
        </div>
      )}
      
      <div className={`mb-auto inline-flex items-center justify-center w-12 h-12 rounded-2xl ${iconBgColor} ${iconColor} group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white/50 z-10`}>
        <Icon size={24} strokeWidth={2} />
      </div>
      
      <div className="mt-4 z-10">
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium opacity-70 text-foreground">{subtitle}</p>
          <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-white transition-colors">
            <ArrowUpRight size={16} className="text-foreground" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;