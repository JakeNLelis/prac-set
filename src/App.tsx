import { useState, useEffect } from "react";
import "./App.css";
import { Inputfield } from "./components/Inputfield";
import { Products } from "./components/Products";
import { ProductsProps } from "./interface";

function App() {
	const [products, setProducts] = useState<ProductsProps[]>([]);
	const [searchValue, setSearchValue] = useState<string>("");
	const [chipSelect, setChipSelect] = useState<string>("all");

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data.products));
	}, []);

	const filteredProducts = products.filter((product) => {
		if (searchValue && chipSelect) {
			if (chipSelect === "all") {
				return (
					product.title.toLowerCase().includes(searchValue) ||
					product.brand.toLowerCase().includes(searchValue)
				);
			} else {
				return (
					(product.title.toLowerCase().includes(searchValue) &&
						product.category === chipSelect) ||
					(product.brand.toLowerCase().includes(searchValue) &&
						product.category === chipSelect)
				);
			}
		} else if (!searchValue && chipSelect !== "all") {
			return product.category === chipSelect;
		} else {
			return product;
		}
	});

	return (
		<div className="App">
			<div className="inputField">
				<Inputfield
					chipSelect={chipSelect}
					setChipSelect={setChipSelect}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</div>
			<div className="container">
				{filteredProducts.map((product) => (
					<Products key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default App;
