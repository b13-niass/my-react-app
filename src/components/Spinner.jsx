import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "flex",
    margin: "100px auto",
    alignItems: "center",
    justifyContent: "center"
};

const Spinner = ({loading, color='#4338ca'}) => {
  return (
      <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
      />
  )
}

export default Spinner;