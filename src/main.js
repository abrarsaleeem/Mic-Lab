import './style.css';
import products from "../api/products.json";
import { showProductContainer } from './productCards';
import { navbar } from "./navbar";
navbar();

// To Display All The Product As a Card
showProductContainer(products);