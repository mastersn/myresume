import React from 'react';
import styles from "./Login.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('drop')}>
            <div className={cx('content')}>
                <h2>Sign in</h2>
                <form >
                    <div className={cx('input-box')}>
                        <input type="text" name="username" id="username" placeholder="Username" />

                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div  className={cx('input-box')}  >
                        <input id='btn-submit' type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;