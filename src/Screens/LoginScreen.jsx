import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser.tsx";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const { startOAuthFlow: startFacebookOAuthFlow } = useOAuth({
    strategy: "oauth_facebook",
  });

  const { startOAuthFlow: startLinkedInOAuthFlow } = useOAuth({
    strategy: "oauth_linkedin",
  });

  const { startOAuthFlow: startTwitterOAuthFlow } = useOAuth({
    strategy: "oauth_twitter",
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

  const handleLinkedInLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startLinkedInOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("LinkedIn OAuth error", err);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startTwitterOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("Twitter OAuth error", err);
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
      <Image
        source={{
          uri: "https://play-lh.googleusercontent.com/ECrWbkZcf9Of2MJq5H8NTbHN-lG9V6dBpSX6-jeUmkQzzdXlcdj4ttdncotkFZC5_7Q",
        }}
        style={styles.logoImage}
      />
      <View style={styles.bgContainer}>
        <Image
          source={{
            uri: "https://evocharge.com/wp-content/uploads/2021/02/GettyImages-1249775796.jpg",
          }}
          style={styles.bgImage}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingOne}>
          Your Ultimate EV Charging Station Finder App{" "}
        </Text>
        <Text style={styles.headingTwo}>
          Find EV Charging stations near you, plan trips, and more with just one
          click{" "}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
          <Image source={require('../../assets/google.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
          <Image source={require('../../assets/github.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLinkedInLogin}>
          <Image source={require('../../assets/linkedin.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Login with LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTwitterLogin}>
          <Image source={require('../../assets/twitter.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Login with Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGitHubLogin}>
          <Image source={require('../../assets/github.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Login with GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  bgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 200,
    zIndex: -1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  headingContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  headingOne: {
    fontFamily: "outfit-bold",
    fontSize: 25,
    textAlign: "center",
  },
  headingTwo: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    marginTop: 10,
    color: Colors.GRAY,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Colors.BLUE,
    width: 320,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: Colors.GRAY,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "outfit-bold",
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default LoginScreen;
