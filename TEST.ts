return (
  <div className={styles.app}>
    <AppHeader />
    <main className={styles.main}>
      <div className={`${styles.container} pr-5 pl-5`}>
        <Routes location={background || location}>
          <Route path="/" element={<Constructor />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/feed/:feedNumber" element={<FeedDetails />} />
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
          <Route path="/profile/orders/:feedNumber" element={<FeedDetails />} />
          <Route path="/login" element={<UnAuth component={<LoginPage />} />} />
          <Route
            path="/register"
            element={<UnAuth component={<RegisterPage />} />}
          />
          <Route
            path="/forgot-password"
            element={<UnAuth component={<ForgotPasswordPage />} />}
          />
          <Route
            path="/reset-password"
            element={<UnAuth component={<ResetPasswordPage />} />}
          />
          <Route path="/profile" element={<Auth component={<ProfilePage />} />}>
            <Route index element={<ProfileForm />} />
            <Route path="orders" element={<FeedUser />} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/ingredients/:id"
              element={
                <Modal title="Детали ингредиента" onClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
            <Route
              path="/feed/:feedNumber"
              element={
                <Modal onClose={handleModalClose}>
                  <FeedDetails />
                </Modal>
              }
            />
            <Route
              path="/profile/orders/:feedNumber"
              element={
                <Modal onClose={handleModalClose}>
                  <FeedDetails />
                </Modal>
              }
            />
          </Routes>
        )}
      </div>
    </main>
    {errorModalOrder === null && !loadingModalOrder && openModalOrder && (
      <Modal onClose={closeModal}>
        <OrderDetails />
      </Modal>
    )}
  </div>
);
