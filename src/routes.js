import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"; 

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
        }}
      >
            <Tab.Screen options={{tabBarIcon: ({ color }) => (<AntDesign name="home" size={32} color={color}/>
            ),
        }}
        name="Home" 
        component={Home}
        />
            <Tab.Screen options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account-circle" size={32} color={color} />
            ),
        }}
            name="Profile" 
            component={Profile}/>
        </Tab.Navigator>
    )
}