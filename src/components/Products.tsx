import React from "react";
import { ProductsProps } from "../interface";

interface Props {
	product: ProductsProps;
}

export const Products = ({ product }: Props) => {
	return (
		<a href="#">
			<div className="card">
				<img className="thumbnail" src={product.thumbnail} alt="" />
				<div>
					<p className="title">{product.title}</p>
					<p className="brand">{product.brand}</p>
					<span className="price">${product.price}.00</span>
				</div>
			</div>
		</a>
	);
};
