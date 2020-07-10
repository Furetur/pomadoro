import React, {ReactNode} from 'react';
import './FancyList.css';

interface Props {
	children: ReactNode;
}

const FancyList = ({children}: Props) => {
	return <ul className="fancy-list">{children}</ul>;
};

export default FancyList;
