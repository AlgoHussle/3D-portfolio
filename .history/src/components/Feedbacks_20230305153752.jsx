import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'


const FeedbackCard = ({ index, testimonial, name, designation, 
 }) => {

}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding}
        bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div
          variants={textVariant()}
          >
            <p className={styles.sectionSubText}>
              What people are saying about me
            </p>
            <h2 className={styles.heroHeadText}>
              Testimonials.
            </h2>
          </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14
      flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
            />
        ))}
      </div>
    </div>
  )
}

export default Feedbacks