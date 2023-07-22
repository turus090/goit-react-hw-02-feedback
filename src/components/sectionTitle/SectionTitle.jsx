import propTypes from 'prop-types'
const SectionTitle = ({title, children}) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

SectionTitle.propTypes =  {
    title: propTypes.string,
    children: propTypes.string
}
export default SectionTitle