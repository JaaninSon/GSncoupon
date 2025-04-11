import styles from "./CartPage.module.css";
import BreadCrumb from "../../components/Breadcrumb";
import CartList from "./component/CartList";
import Products from "./component/Products";

export default function CartPage() {
    return (
        <div className={styles.container}>
            <BreadCrumb title="온라인견적서" />
            <div className={styles.pageWrapper}>
                <Products />
                <CartList />
            </div>
        </div>
    );
}
