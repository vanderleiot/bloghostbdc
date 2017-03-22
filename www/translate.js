angular.module('starter.translate', ['pascalprecht.translate'])
.config(function($translateProvider){
	//Config language
	$translateProvider.preferredLanguage("en");
	$translateProvider.fallbackLanguage("en");
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
	//Translate for EN
	$translateProvider.translations('en', {
		disconnected: "Desconectado",
		photos: "Fotos",
		videos: "Videos",
		latest: "Recentes",
		topnew: "Novos",
		video: "Videos",
		trending: "Tendencias",
		thisArticle: "Este artigo tem",
		comment: "comentário",
		comments: "comentários",
		addComment: "Adicionar comentarios",
		nextStory: "Próximo",
		Comment: "Comentario",
		noData: "NADA ENCONTRADO",
		logout: "SAIR",
		myBookmarks: "Mais gostei",
		appSettings: "App Configuração",
		support: "Suporte",
		rateApp: "Rate us on store",
		shareApp: "Compartilhar app",
		information: "Informação",
		aboutUs: "Sobre",
		termsOfUse: "Termos e privacidade",
		privacyPolicy: "Privacidade",
		version: "Version",
		versionNumber: "1.0",
		news: "News",
		photo: "Fotos",
		bookmark: "M gostei",
		noBookmark: "NADA ENCONTRADO AQUI",
		logIn: "ENTRAR",
		username: "Usúario",
		password: "Senha",
		forgotPassword: "Esqueceu a senha?",
		notMember: "Ainda não é membro?",
		signUpNow: "ASSINAR",
		resetPassword: "Nova senha",
		enterEmail: "seu e-mail",
		email: "Email",
		register: "REGISTRAR",
		weNeed: "Precisamos de mais detalhes sobre você antes de configurar sua conta",
		firstName: "Primeiro nome",
		lastName: "Último nome",
		rePassword: "Senha",
		iAgree: "Estou de acordo com",
		termsConditions: "Termos e Condições",
		keyword: "Palavra-chave",
		emptyList: "Lista vazia",
		noResult: "NENHUM RESULTADO",
	});
	//End Translate for EN
});
