import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

const Card = (props) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<AnimateSharedLayout>
			{expanded ? (
				"Expanded"
			) : (
				/* <ExpandedCar param={props} setExpanded /> */
				<CompactCard param={props} />
			)}
		</AnimateSharedLayout>
	);
};

//compact card

function CompactCard({ param }) {
	
  const Png = param.png;

	return (
		<div className="compactCard" 
    style={{
      background : param.color.backGround,
      boxShadow: param.color.boxShadow,
      }}>
			<div className="radialBar">
      <span>{param.title}</span>
      <CircularProgressbar 
      value={param.barValue}
      text={`${param.barValue}%`}
      /> 
      </div>
			<div className="detail">
				<Png />
				<span>{param.value}</span>
        <br />
				<span>Last 24 hours</span>
			</div>
		</div>
	);
}
export default Card;
