const ProductDetail = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <h1>Chuyên mục: {id[0]}</h1>
      <h1>Sản phẩm: {id[1]}</h1>
    </div>
  );
};

export default ProductDetail;
