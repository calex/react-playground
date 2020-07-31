import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        accordionActiveIndex: 0
    };

    toggleAccordionState = (indexNumber) => {
        this.setState({
            accordionActiveIndex: (this.state.accordionActiveIndex === indexNumber) ? null : indexNumber
        })
    }

    renderContent(activeDisplayIndex) {
        const currentSection = this.props.sections[activeDisplayIndex]
        return (
            <p className='content'>
                {currentSection.content}
            </p>
        )
    }

    renderListItems() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.toggleAccordionState(index)}>
                    {section.title}
                </button>
                {(index === this.state.accordionActiveIndex) && this.renderContent(this.state.accordionActiveIndex)}
            </li>
        ))
    }

    render() {
        return (
            <ul>
                {!!this.props.sections.length && this.renderListItems()}
            </ul>
        )
    }
}

export default Accordion;