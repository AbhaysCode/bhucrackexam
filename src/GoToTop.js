import React, {useState} from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Fab } from '@mui/material';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 50){
	setVisible(true)
	}
	else if (scrolled <= 50){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <Fab className="position-fixed bottom-0 end-0 m-2" size="small" color="primary" aria-label="add" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        <KeyboardDoubleArrowUpIcon />
    </Fab>
);
}

export default ScrollButton;
