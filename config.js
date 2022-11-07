module.exports = {
    OWNER_IDS: ['123456789012345678'],
    PREFIX: '!',
    SUPPORT_SERVER: "",
    INTERACTIONS: {
        SLASH: false, // Should the interactions be enabled
        CONTEXT: false, // Should contexts be enabled
        GLOBAL: false, // Should the interactions be registered globally
        TEST_GUILD_ID: "xxxxxxxxxxx", // Guild ID where the interactions should be registered. [** Test you commands here first **]
    },
    EMBED_COLORS: {
        BOT_EMBED: "#068ADD",
        TRANSPARENT: "#36393F",
        SUCCESS: "#00A56A",
        ERROR: "#D61A3C",
        WARNING: "#F7E919",
    },
    CACHE_SIZE: {
        GUILDS: 100,
        USERS: 10000,
        MEMBERS: 10000,
    },
    MESSAGES: {
        API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
    },
    AUTOMOD: {
        ENABLED: false,
        LOG_EMBED: "#36393F",
        DM_EMBED: "#36393F",
    },
    DASHBOARD: {
        enabled: true, // enable or disable dashboard
        baseURL: "http://localhost:8080", // base url
        failureURL: "http://localhost:8080", // failure redirect url
        port: "8080", // port to run the bot on
    },

    ECONOMY: {
        ENABLED: false,
        CURRENCY: "₪",
        DAILY_COINS: 100, // coins to be received by daily command
        MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
        MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
    },

    ERELA_JS: {
        ENABLED: true,
        IDLE_TIME: 60, // Time in seconds before the bot disconnects from the voice channel
        MAX_SEARCH_RESULTS: 5,
        // Add any number of lavalink nodes here
        // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
        NODES: [
            {
                host: "localhost",
                port: 2333,
                password: "youshallnotpass",
                identifier: "Local Node",
                secure: false,
            },
        ],
    },

    GIVEAWAYS: {
        ENABLED: false,
        REACTION: "🎁",
        START_EMBED: "#FF468A",
        END_EMBED: "#FF468A",
    },

    IMAGE: {
        ENABLED: true,
        BASE_API: "https://image-api.strangebot.xyz",
    },

    INVITE: {
        ENABLED: true,
    },

    MODERATION: {
        ENABLED: true,
        EMBED_COLORS: {
            TIMEOUT: "#102027",
            UNTIMEOUT: "#4B636E",
            KICK: "#FF7961",
            SOFTBAN: "#AF4448",
            BAN: "#D32F2F",
            UNBAN: "#00C853",
            VMUTE: "#102027",
            VUNMUTE: "#4B636E",
            DEAFEN: "#102027",
            UNDEAFEN: "#4B636E",
            DISCONNECT: "RANDOM",
            MOVE: "RANDOM",
        },
    },

    PRESENCE: {
        ENABLED: true, // Whether or not the bot should update its status
        STATUS: "online", // The bot's status [online, idle, dnd, invisible]
        TYPE: "LISTENING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
        MESSAGE: "{members} members in {servers} servers", // Your bot status message
    },

    STATS: {
        ENABLED: true,
        XP_COOLDOWN: 5, // Cooldown in seconds between messages
        DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**",
    },

    SUGGESTIONS: {
        ENABLED: false, // Should the suggestion system be enabled
        EMOJI: {
            UP_VOTE: "⬆️",
            DOWN_VOTE: "⬇️",
        },
        DEFAULT_EMBED: "#4F545C",
        APPROVED_EMBED: "#43B581",
        DENIED_EMBED: "#F04747",
    },

    TICKET: {
        ENABLED: false,
        CREATE_EMBED: "#068ADD",
        CLOSE_EMBED: "#068ADD",
    },
}