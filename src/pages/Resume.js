import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Resume from "../images/Resume.pdf";
import Layout from "../components/layout"


class indexPage extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <Layout>
                <div className="Resume_Container">
                    <Document
                        file={Resume}
                        onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </Layout>
        );
    }
}


export default indexPage;