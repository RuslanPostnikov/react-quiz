import styles from './MenuToggle.module.css';


const MenuToggle = props => {
    const cls = [styles.MenuToggle];
    if(props.isOpen) cls.push(styles.open);

  return (
      <i
          className={cls.join(' ')}
          onClick={props.onToggle}
      >Menu</i>
  )
}

export default MenuToggle;
