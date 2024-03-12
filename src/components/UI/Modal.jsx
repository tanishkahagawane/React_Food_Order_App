/*A modal
    a component that opens as an overlay on the screen.
 */
import { useRef, useEffect } from 'react';
import {createPortal} from 'react-dom';

export default function Modal({children,open,onClose,className = ''}){
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current;

        if(open){
            modal.showModal();
        }
        //clean up function
        return () => modal.close();
    },[open]);
    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
    
}
/*
if we use escape to close he modal , it will close, however 
if we try to click on cart again it will not work.
Reason?? ->beause here the modal will be closed by browser
but in our app , the iuser progress won't chnage
so it will stay at cart or checkout(UserProgressContext)

so we need to update UserProgression state whenever the modal is closed by escape key.
therefore we add onClose in dialog above.
*/