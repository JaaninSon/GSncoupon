import styles from "./CartPage.module.css";
import BreadCrumb from "./component/common/Breadcrumb";
import CartList from "./component/CartList";
import ProductsView from "./component/ProductsView";

export default function CartPage() {
    return (
        <div className={styles.container}>
            <BreadCrumb title="온라인견적서" />
            <div className={styles.pageWrapper}>
                <ProductsView />
                <CartList />
            </div>
        </div>
    );
}
