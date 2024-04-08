import React, { useEffect } from 'react';
import "./Subscription.css";
import { useUser } from '../../utils/UserProvider';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {

    const { isUserLoggedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/')
        }
    }, [isUserLoggedIn])

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <div className='top-bg'>
                        <img className='back-arrow' alt='back-arrow' src='data:image/png;base64,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' />
                        <img className='logo' alt='logo' src='https://pay.wynk.in/static/media/Wynklogo-white.97aea089.svg' />
                        <img className='crown-img' alt='crown-img' src='data:image/png;base64,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' />
                    </div>
                </div>
                <div className='offer-container'>
                    <div className='offer-card'>
                        <div className='card-header'>
                            <div className='header-title'>
                                <p>Go Premium</p>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFZSURBVHgB7ZNfTsJAEMa/mWx9NPXBqJGSTbkAR+AI3kBuADegngRvQm8gXoCUSEL4F3g22nEXJaHbJQg8kfB76XZmvv12drLAhbNnHsVdnMIk0k/je6135aeRbs6iWKZRrbmrxupnFd3YjnHhR7AKAu5NH3XdJ2Zw51cknWWow9IhjM7o376ceMFEKfQF0MTcGzunUVfcsjm7tt/Pa25v5+fV2jMbncmFD6Ms3Wlyk2UrAjKzDBVxzwo3XZid207Xrc3VLqpxS0RerQFE+nBQbkBApkjWYiucVWNNgrqgRKgC6i4qcZoLkk0wJwz3m4gMiQquicfgD2qYTRvFDajUCZd0kpeKDiFHnu41+Q6Q4hTUeqYFyFdn3sISdoiHs7r9GNy4QfaWSvk0/0O8V+01EZJ3HGMhdJTufPAOflKJEyZ0cCDmUb7cjQaJG/fOhCjPcARElOHCWfADSdd14sgSVG0AAAAASUVORK5CYII=' alt='crown-img' />
                            </div>
                            <small>Get the best of music & podcasts</small>
                        </div>
                    </div>
                    <div className='table-wrapper'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='align-left'>Benifits</th>
                                    <th style={{ width: "50px" }}>Now</th>
                                    <th className='premium'>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='align-left'>Unlimited Streaming</td>
                                    <td className='align-center'>
                                        <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBjY/RCcJAEET3zvNPJX4oikbOVGAJKUE70ArUCrQErSAlqB2kA+0gBwaCCeKB+Gdu3QSCgmAcWNgdHsMOgz8V9+QoTUGzMjCwpFVr8BUgLAzgQZSlcs53iCDp1NwwX1wHzpyMUeVulk2tdAFnvkHYIO2IeEoFTrpnpYRB5pI1fta5Bg3LqCOlqDKPYBdyGLbtMFgUQSySBKT8SLtFs6dSLqVaNIqhmbVC5X++mZeObTllwL3CzFIfwqyH6v3il5K+s05s53ax5Rh+6AWR01MgW8zLiQAAAABJRU5ErkJggg==' />
                                    </td>
                                    <td className='align-center'>
                                        <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBjY/RCcJAEET3zvNPJX4oikbOVGAJKUE70ArUCrQErSAlqB2kA+0gBwaCCeKB+Gdu3QSCgmAcWNgdHsMOgz8V9+QoTUGzMjCwpFVr8BUgLAzgQZSlcs53iCDp1NwwX1wHzpyMUeVulk2tdAFnvkHYIO2IeEoFTrpnpYRB5pI1fta5Bg3LqCOlqDKPYBdyGLbtMFgUQSySBKT8SLtFs6dSLqVaNIqhmbVC5X++mZeObTllwL3CzFIfwqyH6v3il5K+s05s53ax5Rh+6AWR01MgW8zLiQAAAABJRU5ErkJggg==' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-left'>Unlimited Downloads</td>
                                    <td className='align-center'>
                                        <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBbZDBCcMwDEUl0QGyYBp88LlkAssb5N5DKKED9t5alVoCiiOBjOz/wA/h+thuADCkaawQlOWtCdJbjybA+lDO0LNotjSQgXK6LnqpPfyHGmvXnCbGPbivGxNC0WYAAg9Zjv6rHbbZQ1bkwQuRRPMB9E6RM0bivbOtDiPo5Cwy6x4/L13l3ENWOY3801DDL5GZgHdRlBV3AAAAAElFTkSuQmCC' />
                                    </td>
                                    <td className='align-center'>
                                        <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBjY/RCcJAEET3zvNPJX4oikbOVGAJKUE70ArUCrQErSAlqB2kA+0gBwaCCeKB+Gdu3QSCgmAcWNgdHsMOgz8V9+QoTUGzMjCwpFVr8BUgLAzgQZSlcs53iCDp1NwwX1wHzpyMUeVulk2tdAFnvkHYIO2IeEoFTrpnpYRB5pI1fta5Bg3LqCOlqDKPYBdyGLbtMFgUQSySBKT8SLtFs6dSLqVaNIqhmbVC5X++mZeObTllwL3CzFIfwqyH6v3il5K+s05s53ax5Rh+6AWR01MgW8zLiQAAAABJRU5ErkJggg==' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-left'>Ad-free Music</td>
                                    <td className='align-center'>
                                        <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBbZDBCcMwDEUl0QGyYBp88LlkAssb5N5DKKED9t5alVoCiiOBjOz/wA/h+thuADCkaawQlOWtCdJbjybA+lDO0LNotjSQgXK6LnqpPfyHGmvXnCbGPbivGxNC0WYAAg9Zjv6rHbbZQ1bkwQuRRPMB9E6RM0bivbOtDiPo5Cwy6x4/L13l3ENWOY3801DDL5GZgHdRlBV3AAAAAElFTkSuQmCC' />
                                    </td>
                                    <td className='align-center'>
                                        <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBjY/RCcJAEET3zvNPJX4oikbOVGAJKUE70ArUCrQErSAlqB2kA+0gBwaCCeKB+Gdu3QSCgmAcWNgdHsMOgz8V9+QoTUGzMjCwpFVr8BUgLAzgQZSlcs53iCDp1NwwX1wHzpyMUeVulk2tdAFnvkHYIO2IeEoFTrpnpYRB5pI1fta5Bg3LqCOlqDKPYBdyGLbtMFgUQSySBKT8SLtFs6dSLqVaNIqhmbVC5X++mZeObTllwL3CzFIfwqyH6v3il5K+s05s53ax5Rh+6AWR01MgW8zLiQAAAABJRU5ErkJggg==' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='plan-wrapper'>
                        <div className='sub-plan'>
                            <div className='plan-cards selected-cards'>
                                <div className='best__value'>
                                    <span>Best Value</span>
                                </div>
                                <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgBpZTPSwJBFMe/762HoLS1QyC5MHi0Q/4JdusQ2J+Q9A9I0C0w/4LsD4jy0qFLhy7dsg5d8+TVAQ+GBS4KddDdaWZFWENpWT8ww/sx83284TH05eQ6ChCIglItImqNx34t8yFlOEWfTk4hHvXEyK+lXekahwmQiEdlskHPA1vYgZBScBEXosIkydWpEPCC1aj0sqLITNTEiljgI7Ysr6ntSO2tnZSRfnoEp1Jzcf3QJU5L6ep3aiy6uF49Dy5Z2R1s3t9hQ/v+cBisMGZ8yBg9IUTC4044SVpg6+0VfrcLdrImgu/LOn6ubxfVBJstI6Ukhau5Krrq6PQM1m4ek3Ybg4PDpSJB4ZkxEMIee/xOf6Y8kZ8K/QeFnb4QBdJiiAGHnW0pWwp+GTGgRcG+I44JfINVhQIx3SY8fqCIPwMvS5g2PcvfV1ANRICiHDJzZnl0QaCSdu3YQjM6ekSSHoq+4iJB7elPTpip1kv+Ap7AfHBE4do7AAAAAElFTkSuQmCC' />
                                <p className='period'>Yearly</p>
                                <p className='price'>
                                    <span className='original-price'>₹ 999</span>
                                    <span className='payable-price'>₹ 399</span>
                                </p>
                                <p className='discount'>Save 60%</p>
                            </div>
                        </div>
                        <div className='sub-plan'>
                            <div className='plan-cards non-selected-cards'>
                                <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFOSURBVHgBpVTLbYNAEJ1dG04cuCCExAEqiEsgFTglJB2kgyQdJBVEriAlxKnAdIAFXLggI3HimzerRIIIKwiehNjfvJl5PFakaRr1fe/RPIRCiLCu6xff98/DDZEkSU8LgOSvbdsy4YXnEhnOtACIe9xut59RFJmKCMwXWo7dZrN5UkRd133RCnBlkCfg1o60EijmTkKwI8az2jMMg2zbJinlaB3t7SWrDsbDVKBpmioIopJlWWqOs+oZgu0jeADlPRyOhptM4DgONU3DGVkLKoqCyrKcykmqxh9zvdG4b8rznDRNIxiQsiy7SsIQvwP2A4JOf12u6zpVVUX/QQwn+F12IDrRAozkd103BNEDLYCYWozj+B7ivtNaIga3idfH3JtBXtvgNvG1bkF0oBkQcw6xz+ClZ7S7x9RcTDQgNEEYoMoAhr0BsadcjavoGwF5k/HfDej/AAAAAElFTkSuQmCC' />
                                <p className='period'>3 months</p>
                                <p className='price'>
                                    <span className='original-price'>₹ 999</span>
                                    <span className='payable-price'>₹ 399</span>
                                </p>
                                <p className='discount'>Save 60%</p>
                            </div>
                        </div>
                        <div className='sub-plan'>
                            <div className='plan-cards non-selected-cards'>
                                <div className='best__value'>
                                    <span>Best Value</span>
                                </div>
                                <img alt='tick-mark' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFOSURBVHgBpVTLbYNAEJ1dG04cuCCExAEqiEsgFTglJB2kgyQdJBVEriAlxKnAdIAFXLggI3HimzerRIIIKwiehNjfvJl5PFakaRr1fe/RPIRCiLCu6xff98/DDZEkSU8LgOSvbdsy4YXnEhnOtACIe9xut59RFJmKCMwXWo7dZrN5UkRd133RCnBlkCfg1o60EijmTkKwI8az2jMMg2zbJinlaB3t7SWrDsbDVKBpmioIopJlWWqOs+oZgu0jeADlPRyOhptM4DgONU3DGVkLKoqCyrKcykmqxh9zvdG4b8rznDRNIxiQsiy7SsIQvwP2A4JOf12u6zpVVUX/QQwn+F12IDrRAozkd103BNEDLYCYWozj+B7ivtNaIga3idfH3JtBXtvgNvG1bkF0oBkQcw6xz+ClZ7S7x9RcTDQgNEEYoMoAhr0BsadcjavoGwF5k/HfDej/AAAAAElFTkSuQmCC' />
                                <p className='period'>Yearly</p>
                                <p className='price'>
                                    <span className='original-price'>₹ 999</span>
                                    <span className='payable-price'>₹ 399</span>
                                </p>
                                <p className='discount'>Save 60%</p>
                            </div>
                        </div>
                        <div className='sub-plan1'>
                            <div className='valadity-wrapper align-center'>
                            </div>
                        </div>
                    </div>
                    <div className='term-conditions'>
                        <li>
                            "All amounts are inclusive of"
                            "18%"
                            " GST"
                        </li>
                        <li>
                            "BY clicking on Continue button, you agree to Wynk's"
                            <a href='https://www.wynk.in/assets/webview/tos.html?coo=IN'>Terms and service</a>
                            "and"
                            <a href='https://www.wynk.in/assets/webview/privacyPolicy.html?theme=dark&x-bsy-did=cc2f5b34350276a6%2FAndroid%2F33%2F1036%2F3.52.1.0&coo=IN'>Terms and service</a>
                            "."
                        </li>
                        <li>
                            "Get Yearly plan at $399. An auto-renewal plan, cancel anytime on app."
                        </li>
                    </div>
                </div>

                <div className='gTfXxU'>
                    <div>
                        <p>Amount to be paid</p>
                        <small>
                            "$"
                            "399"
                        </small>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription