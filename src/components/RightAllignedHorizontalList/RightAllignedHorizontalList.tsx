import React, {ReactNode} from 'react';
import './RightAllignedHorizontalList.css';

interface Props {
	children: ReactNode;
}

const RightAllignedHorizontalList = ({children}: Props) => {
	return <ul className="right-alligned-horizontal-list">{children}</ul>;
};

export default RightAllignedHorizontalList;
