export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className={styles.ingredients}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </section>
  );
}

ingredient - item;
