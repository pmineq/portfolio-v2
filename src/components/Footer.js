import React from "react";
import { Component } from 'react';



class Footer extends Component {
  render() {

    return (
			<footer id="footer" className="footer">
				<div className="bottom-wrap">
					<div className="footer-inner">
						<p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br/>
							© 2024 Park, Min-Hye. All Rights Reserved.</p>
					</div>
				</div>
			</footer>
    )
  }
}

export default Footer;