import { useRef } from "react";

interface Props {
	chipSelect: string;
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	setChipSelect: React.Dispatch<React.SetStateAction<string>>;
}

export const Inputfield = ({
	chipSelect,
	searchValue,
	setSearchValue,
	setChipSelect,
}: Props) => {
	const input = useRef<HTMLInputElement>(null);

	const submitAction = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		input.current?.blur();
	};

	const changeAction = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value.toLowerCase());
	};

	return (
		<div className="inputBox">
			<form onSubmit={submitAction}>
				<input
					value={searchValue}
					onChange={changeAction}
					ref={input}
					type="search"
					placeholder="Search a product or brand..."
				/>
			</form>
			<div className="chipSelectorContainer">
				<form className="form">
					<label
						htmlFor="all"
						style={{
							backgroundColor: chipSelect == "all" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "all" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="all"
							value="all"
						/>
						All
					</label>
					<label
						htmlFor="smartphone"
						style={{
							backgroundColor:
								chipSelect == "smartphones" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "smartphones" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="smartphones"
							value="smartphones"
						/>
						Smartphones
					</label>
					<label
						htmlFor="latops"
						style={{
							backgroundColor:
								chipSelect == "laptops" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "laptops" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="laptops"
							value="laptops"
						/>
						Laptops
					</label>
					<label
						htmlFor="fragrance"
						style={{
							backgroundColor:
								chipSelect == "fragrances" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "fragrances" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="fragrance"
							value="fragrances"
						/>
						Fragrance
					</label>
					<label
						htmlFor="skincare"
						style={{
							backgroundColor:
								chipSelect == "skincare" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "skincare" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="skincare"
							value="skincare"
						/>
						Skincare
					</label>
					<label
						htmlFor="groceries"
						style={{
							backgroundColor:
								chipSelect == "groceries" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "groceries" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="groceries"
							value="groceries"
						/>
						Groceries
					</label>
					<label
						htmlFor="homedecor"
						style={{
							backgroundColor:
								chipSelect == "home-decoration" ? "rgb(50,50,50)" : "white",
							color: chipSelect == "home-decoration" ? "white" : "black",
						}}>
						<input
							onClick={(e) => setChipSelect(e.target.value)}
							type="radio"
							className="radio"
							name="category"
							id="homedecor"
							value="home-decoration"
						/>
						Home-Decoration
					</label>
				</form>
			</div>
		</div>
	);
};
