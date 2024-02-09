import { useState } from 'react';
import { motion } from 'framer-motion';
import { relative } from 'path';
type CircleLoadingBarProp = {
  radius: number;
  progress: number;
  strokeWidth: number;
};
function CircleLoadingBar({ radius, progress, strokeWidth }: CircleLoadingBarProp) {
  const diameter = radius * 2;
  const ViewBoxParam = diameter + strokeWidth * 2;
  const center = ViewBoxParam / 2;
  const circumference = 2 * Math.PI * radius;
  const dashArrayParam = (progress * circumference) / 100;
  const [calprogress, setCalProgress] = useState(0);

  const updateDashArray = (values: any) => {
    const val = (values.strokeDasharray.split(' ')[0] * 100) / circumference;
    setCalProgress(parseInt('' + (val + 0.1)));
  };
  return (
    <div
      style={{
        position: 'relative',
        width: ViewBoxParam,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <svg viewBox={`0 0 ${ViewBoxParam} ${ViewBoxParam}`} xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
          cx={center}
          cy={center}
          r={radius}
          stroke="rgba(255,0,0)"
          animate={{
            strokeDasharray: [
              `${0} ${circumference}`,
              `${dashArrayParam + 20} ${circumference}`,
              `${dashArrayParam} ${circumference}`,
            ],
          }}
          onUpdate={updateDashArray}
          transition={{ duration: 2 }}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
      </svg>
      <button className="completeButton" type="button">
        {calprogress > 100 ? 100 : calprogress} Complete
      </button>
    </div>
  );
}

export default CircleLoadingBar;
