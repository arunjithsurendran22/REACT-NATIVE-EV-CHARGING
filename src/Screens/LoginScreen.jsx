import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser.tsx";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInUp,
  BounceIn,
  FlipInEasyX,
} from "react-native-reanimated";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const { startOAuthFlow: startFacebookOAuthFlow } = useOAuth({
    strategy: "oauth_facebook",
  });

  const { startOAuthFlow: startGitHubOAuthFlow } = useOAuth({
    strategy: "oauth_github",
  });

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startGoogleOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("Google OAuth error", err);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startFacebookOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("Facebook OAuth error", err);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startGitHubOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("GitHub OAuth error", err);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Image
        source={require("../../assets/images/background.png")}
        style={styles.backgroundImage}
      />
      {/* Lights */}
      <Animated.View
        entering={FadeInUp.delay(1000).springify()}
        style={styles.lightsContainer}
      >
        <Image
          source={require("../../assets/images/Hanging-Light-PNG-Transparent-Image.png")}
          style={[styles.lightImage, { height: 400, width: 200 }]}
        />
        <Image
          source={require("../../assets/images/Hanging-Light-PNG-Transparent-Image.png")}
          style={[styles.lightImage, { height: 250, width: 100 }]}
        />
      </Animated.View>

      <View style={styles.contentContainer}>
        {/* Title */}
        <Animated.View
          entering={FadeInUp.delay(1500).springify()}
          style={styles.titleContainer}
        >
          <Text style={styles.titleText}>SignIn</Text>
        </Animated.View>

        {/* Social Icons */}
        <Animated.View
          entering={FadeInUp.delay(1600).springify()}
          style={styles.socialContainer}
        >
          <TouchableOpacity
            style={[styles.socialButton, styles.googleButton]}
            onPress={handleGoogleLogin}
          >
            <Animated.Image
              entering={BounceIn.delay(1800).springify()}
              source={require("../../assets/images/google.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}
            onPress={handleFacebookLogin}
          >
            <Animated.Image
              entering={BounceIn.delay(2000).springify()}
              source={require("../../assets/images/facebook.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, styles.githubButton]}
            onPress={handleGitHubLogin}
          >
            <Animated.Image
              entering={BounceIn.delay(2200).springify()}
              source={require("../../assets/images/github.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </Animated.View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Animated.View
            entering={FadeInUp.delay(2400).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
              style={styles.input}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(2600).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
              style={styles.input}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(2800).springify()}
            style={styles.buttonContainer}
          >
            <Animated.View entering={FlipInEasyX.delay(3000).springify()}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  /* handle sign in */
                }}
              >
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(3200).springify()}
            style={styles.signUpContainer}
          >
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text style={styles.signUpLink}>SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  lightsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    width: "100%",
    top: -90,
  },
  lightImage: {
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 36,
    fontStyle: "italic",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  socialButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 10,
  },
  googleButton: {
    backgroundColor: "#ffff",
  },
  facebookButton: {
    backgroundColor: "#ffff",
  },
  githubButton: {
    backgroundColor: "#ffff",
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    color: "black",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1DA9EF",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "gray",
    fontStyle: "italic",
    marginRight: 5,
  },
  signUpLink: {
    color: "#1DA9EF",
  },
});

export default LoginScreen;
