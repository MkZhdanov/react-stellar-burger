export default function App() {
  const [dataIngredientsState, setDataIngredientsState] = useState({
    ingredients: null,
    loading: false,
    error: false,
  });

  const [modalIngredientState, setModalIngredientState] = useState({
    open: false,
    data: null,
  });

  const [modalOrderState, setModalOrderState] = useState({
    open: false,
  });

  const handleOrderClick = () => {
    setModalOrderState({ open: true });
  };

  const handleIngredientClick = (data) => {
    setModalIngredientState({ open: true, data: data });
  };

  const closeModal = () => {
    setModalIngredientState({ ...modalIngredientState, open: false });
    setModalOrderState({ ...modalOrderState, open: false });
  };

  useEffect(() => {
    const fetchDataIngredient = async () => {
      setDataIngredientsState({ ...dataIngredientsState, loading: true });
      try {
        const response = await fetch(
          "https://norma.nomoreparties.space/api/ingredients"
        );
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const rez = await response.json();
        setDataIngredientsState({
          ingredients: rez.data,
          loading: false,
          error: !rez.success,
        });
      } catch (error) {
        console.error("ERROR:", error);
        setDataIngredientsState({
          ingredients: null,
          loading: false,
          error: true,
        });
      }
    };
    fetchDataIngredient();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {!dataIngredientsState.error && !dataIngredientsState.loading && (
          <BurgerIngredients
            onCardClick={handleIngredientClick}
            data={dataIngredientsState.ingredients}
          />
        )}
        <BurgerConstructor onOrderClick={handleOrderClick} />
      </main>
      {modalOrderState.open && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
      {modalIngredientState.open && (
        <Modal title="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails data={modalIngredientState.data} />
        </Modal>
      )}
    </div>
  );
}
