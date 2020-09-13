import React, { Component } from 'react';


class SuccessAlert extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div class="modal fade success-popup" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title" id="myModalLabel">Thank You !</h4>
                        </div>
                        <div class="modal-body text-center">
                            {/* <img src="http://osmhotels.com//assets/check-true.jpg" /> */}
                            <p class="lead">Contact form successfully submitted. Thank you, We will get back to you soon!</p>
                            <a href="index.php" class="rd_more btn btn-default">Go to Home</a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SuccessAlert;