import { clsx as cn } from "clsx";
import styles from "./modal.module.css";
import { IoClose } from "react-icons/io5";
import { Button } from "../button";

export function Modal({
  title,
  children,
  className,
  ...props
}: React.ComponentProps<'dialog'> & {
  title: string;
}) {
  return (
    <dialog className={cn(styles.modal, className)} {...props}>
      <div className={styles.modalHeader}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <form method="dialog">
          <Button variant={"ghost"} className={styles.modalCloseButton}>
            <IoClose />
          </Button>
        </form>
      </div>
      <div className={styles.modalContent}>
        {children}
      </div>
    </dialog>
  )
}