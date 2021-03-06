import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";
const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((element, index) => index < 4)
					.map((element) => {
						return (
							<CollectionItem key={element.id} {...element}></CollectionItem>
						);
					})}
			</div>
		</div>
	);
};
export default CollectionPreview;
