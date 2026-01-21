import { createRouter, createWebHashHistory } from "vue-router";


// Pagini
import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
import ForgotPassword from '../pages/ForgotPassword.vue';

import Home from '../pages/Home.vue';
import ProfilePage from '../pages/ProfilePage.vue';

import GamePage from '../pages/GamePage.vue';
import GameDetailPage from '../pages/GameDetailPage.vue';
import CreateTeam from '../pages/CreateTeam.vue';
import TeamPage from '../pages/TeamPage.vue';

import Chat from '../pages/Chat.vue';
import Notifications from '../pages/Notifications.vue';
import Settings from '../pages/Settings.vue';

import Leaderboard from '../pages/Leaderboard.vue';
import SearchPage from '../pages/SearchPage.vue';

import HelpPage from '../pages/HelpPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import MessageSent from '../pages/MessageSent.vue';

import TermsAndConditions from '../pages/TermsAndConditions.vue';
import Error404 from '../pages/Error404.vue';

import GameInviteNotification from '../pages/GameInviteNotification.vue';
import Payment from '../pages/Payment.vue';
import Achievements from '../pages/Achievements.vue';
import CreatePost from '../pages/CreatePost.vue';
import FriendsList from '../pages/FriendsList.vue';

import LogoutConfirmation from '../pages/LogoutConfirmation.vue';

const routes = [
  { path: '/', redirect: '/login' },

  // Auth pages
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/forgot-password', component: ForgotPassword },

  // Main
  { path: '/home', component: Home },
  { path: '/profile', component: ProfilePage },

  // Games
  { path: '/games', component: GamePage },
  { path: '/game-detail', component: GameDetailPage },
  { path: '/create-team', component: CreateTeam },
  { path: '/team', component: TeamPage },

  // Communication
  { path: '/chat', component: Chat },
  { path: '/notifications', component: Notifications },

  // Other Pages
  { path: '/settings', component: Settings },
  { path: '/leaderboard', component: Leaderboard },
  { path: '/search', component: SearchPage },
  { path: '/help', component: HelpPage },
  { path: '/contact', component: ContactPage },
  { path: '/message-sent', component: MessageSent },

  // Extras
  { path: '/terms', component: TermsAndConditions },
  { path: '/game-invite', component: GameInviteNotification },
  { path: '/payment', component: Payment },
  { path: '/achievements', component: Achievements },
  { path: '/create-post', component: CreatePost },
  { path: '/friends', component: FriendsList },
  { path: '/logout-confirmation', component: LogoutConfirmation },

  // Error page
  { path: '/404', component: Error404 },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const router = createRouter({
 history: createWebHashHistory(import.meta.env.BASE_URL),

  routes,
});

export default router;
