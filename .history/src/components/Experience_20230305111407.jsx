import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from "../constants";
import { sectionWrapper } from "../hoc";
import { textVariant} from '../utils/motion';




const Experience = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >

      </motion.div>
    </>
  )
}

export default Experience