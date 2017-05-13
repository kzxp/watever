import React from 'react';
import styles from './styles.sass';
import classnames from 'classnames'

const InfoColumns = (props) => {

  const { image, data, endSpecficLinkText } = props;
  const columns = classnames(styles.columns, "columns")
  const imageCls = classnames(styles["main-image"], "is-flex")
  const infoLines = classnames(styles["info-lines"], "column", "has-text-centered")

  return (
    <div className={columns}>
        <div className="column is-one-third">
            <div className={imageCls}>
                <figure className="image">
                    <img src={ props.image } alt="Main" />
                </figure>
            </div>
        </div>
        <div className={infoLines}>      
          {
            props.data && 
              props.data.map((item, index) => 
                <p key={index}>
                  { transfromByKey({...item, endSpecficLinkText}) }
                </p>
              )
          }
        </div>
    </div>
  );
};


const transfromByKey = ({ key, value, endSpecficLink, endSpecficLinkText }) => {
    
    switch (key) {

      case 'Age':
          const currentDate = new Date(),
          birthDate = new Date(value),
          currentYear = currentDate.getFullYear(),
          birthYear = birthDate.getFullYear(),
          currentMonth = currentDate.getMonth(),
          birthMonth = birthDate.getMonth(),
          currenDay = currentDate.getDate(),
          birthDay = birthDate.getDate(),
          age = currentYear - birthYear

          if ( birthMonth > currentMonth ) age--
          else if ( birthMonth === currentMonth && birthDay > currenDay ) age--

          return age + ' years old'

      case 'Work':
      case 'Education':
          return endSpecficLink ?
              [ `${value}  ${endSpecficLinkText} `,
              <a href={endSpecficLink.link} key={endSpecficLink.text} target="_blank">{endSpecficLink.text}</a> ]
              : value
      case 'Skill':
          return value.map((skill) => {
              return <span className="tag is-light" key={'key-'+skill}>{skill}</span>
          })
      default:
          return value
            
    }
}

export default InfoColumns;