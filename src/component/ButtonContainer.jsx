import styles from "./ButtonContainer.module.css"
const ButtonContainer=({click})=>{
    const buttonName=['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','*'];
    return  <div className={styles.buttonscontainer}>
   {buttonName.map(item=><button className={styles.button} onClick={()=>click(item)}>{item}</button>)}
    
  </div>




}
export default ButtonContainer;