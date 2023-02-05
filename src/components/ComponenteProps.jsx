import { PropTypes } from "prop-types"

const ComponenteProps = ({ titulo }) => {
    return <>{titulo}</>
}

ComponenteProps.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    isVisible: PropTypes.bool,
    onClick: PropTypes.func
}

export default ComponenteProps
