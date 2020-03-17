import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { AuthFunctionContext } from '../store/UserStore';
import { FullConfig } from '../Configuration';
import { AuthView } from './AuthView';
import { strings } from '../internationalization';
import { PasswordField } from './common/PasswordField';
import { validatePasswordAPI } from '../api/api';
import { ErrorMessage } from '../api/types';
import { AxiosError } from 'axios';

const useStyles = makeStyles((theme: Theme) => createStyles({
  form: {
    paddingTop: 35,
    paddingLeft: 47,
    paddingRight: 30,
    paddingBottom: 40,
    boxShadow: '0 1px 36px 0 rgba(211, 211, 211, 0.5)',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 17,
      paddingRight: 17,
    },
  },
  title: {
    marginBottom: 47,
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
      letterSpacing: 0.18,
    },
  },
  inputField: {
    marginBottom: 30,
  },
  formHelperText: {
    marginBottom: 41,
    fontSize: '1rem',
    color: theme.palette.primary.main,
  },
  successText: {
    marginBottom: 30,
  },
}));

export const makeResetPasswordForm: (config: FullConfig) => {
  ResetPasswordForm: FC; ResetPasswordView: FC;
} = ({
  components: { loadingIndicator },
  paths: { login },
}) => {
  const ResetPasswordForm = () => {
    const classes = useStyles();
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordErrorMessages, setPasswordErrorMessages] = useState<ErrorMessage>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { apiUrl, resetPassword } = useContext(AuthFunctionContext);
    const { ident, token } = useParams();

    const validatePassword = (pw: string) => {
      if (ident) {
        process.nextTick(() => {
          validatePasswordAPI(apiUrl, ident, pw)
            .then(() => {
              setPasswordErrorMessages({});
            }).catch((error: AxiosError) => {
              if (error.response) {
                setPasswordErrorMessages({
                  password: error.response.data.non_field_errors,
                });
              }
            });
        });
      }
    };

    return (
      <Paper
        className={classes.form}
      >
        <Typography
          className={classes.title}
          variant="h3"
        >
          {strings.ResetPassword.ResetPassword}
        </Typography>

        {
          loading ? (
            <Grid container item xs={12} justify="center">
              {loadingIndicator()}
            </Grid>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (ident && token) {
                  setLoading(true);
                  resetPassword(ident, token, password).then(() => {
                    setSuccess(true);
                  }).catch(() => {
                    // TODO: Error handling
                  }).finally(() => {
                    setLoading(false);
                  });
                }
              }}
            >
              {
                success ? (
                  <>
                    <Typography
                      className={classes.successText}
                      variant="body1"
                    >
                      {strings.ResetPassword.SuccessText}
                    </Typography>

                    <Grid container item xs={12} justify="center">
                      <Button
                        type="button"
                        title={strings.ResetPassword.SuccessButtonText}
                        variant="contained"
                        color="primary"
                        href={login}
                      >
                        {strings.ResetPassword.SuccessButtonText}
                      </Button>
                    </Grid>
                  </>
                ) : (
                  <>
                    <PasswordField
                      className={classes.inputField}
                      password={password}
                      setPassword={setPassword}
                      errorMessage={passwordErrorMessages}
                      label={strings.ResetPassword.NewPassword}
                      id="reset_password"
                      onChange={(value) => validatePassword(value)}
                    />

                    <PasswordField
                      className={classes.inputField}
                      password={password2}
                      setPassword={setPassword2}
                      errorMessage={{}}
                      label={strings.ResetPassword.RepeatNewPassword}
                      id="reset_password2"
                    />

                    <Grid container item xs={12} justify="center">
                      <Button
                        id="reset_submit"
                        type="submit"
                        title={strings.ResetPassword.ButtonText}
                        variant="contained"
                        color="primary"
                        disabled={password !== password2 || password.length < 7}
                      >
                        {strings.ResetPassword.ButtonText}
                      </Button>
                    </Grid>
                  </>
                )
              }
            </form>
          )
        }
      </Paper>
    );
  };

  const ResetPasswordView = () => (
    <AuthView>
      <ResetPasswordForm />
    </AuthView>
  );

  return { ResetPasswordForm, ResetPasswordView };
};
