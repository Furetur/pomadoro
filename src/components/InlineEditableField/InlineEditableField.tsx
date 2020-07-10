import React, {useState} from 'react';
import './InlineEditableField.css';

interface Props {
	value: string;
	onValueUpdate: (newValue: string) => void;
}

const InlineEditableField = ({value, onValueUpdate}: Props) => {
	const [beingEdited, setBeingEdited] = useState(false);

	return (
		<div className="inline-editable-field" onClick={() => setBeingEdited(true)}>
			{beingEdited ? (
				<input
					value={value}
					onChange={(event) => onValueUpdate(event.target.value)}
					onBlur={() => setBeingEdited(false)}
				/>
			) : (
				<span>{value}</span>
			)}
		</div>
	);
};

export default InlineEditableField;
