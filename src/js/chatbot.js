
        let currentLanguage = "fa";

        const translations = {
            fa: {
                header: "چت‌بات فروشگاهی",
                placeholder: "سؤالت رو بپرس...",
                sendButton: "ارسال",
                quickQuestions: [
                    "محصول موجوده؟",
                    "هزینه ارسال چقدره؟",
                    "زمان تحویل چطوره؟"
                ],
                responses: {
                    "موجود": "بله، محصول مورد نظر شما موجوده! لطفاً مدل یا نام دقیق رو بگید تا چک کنم.",
                    "هزینه ارسال": "هزینه ارسال برای تهران ۵۰,۰۰۰ تومان و برای شهرستان‌ها ۷۰,۰۰۰ تومنه.",
                    "زمان تحویل": "تحویل در تهران ۱-۲ روزه و در شهرستان‌ها ۳-۵ روز کاری طول می‌کشه.",
                    "بازگشت": "شما تا ۷ روز می‌تونید محصول رو بدون دلیل برگردونید، فقط باید سالم باشه.",
                    "پشتیبانی": "تیم پشتیبانی ما ۲۴/۷ در دسترسه. می‌تونید با شماره ۰۲۱-۱۲۳۴۵۶۷ تماس بگیرید.",
                    "default": "متوجه سؤالتون نشدم! لطفاً سؤالتون رو واضح‌تر بپرسید یا با پشتیبانی تماس بگیرید."
                }
            },
            en: {
                header: "Store Chatbot",
                placeholder: "Ask your question...",
                sendButton: "Send",
                quickQuestions: [
                    "Is the product available?",
                    "How much is the shipping cost?",
                    "What’s the delivery time?"
                ],
                responses: {
                    "available": "Yes, the product is available! Please provide the exact model or name for me to check.",
                    "shipping cost": "Shipping cost is $5 for local and $10 for international.",
                    "delivery time": "Delivery takes 1-2 days in Tehran and 3-5 business days for other cities.",
                    "return": "You can return the product within 7 days for any reason, as long as it’s in good condition.",
                    "support": "Our support team is available 24/7. You can call us at +98-21-1234567.",
                    "default": "Sorry, I didn’t understand your question! Please ask more clearly or contact support."
                }
            }
        };

        function toggleChat() {
            const chatContainer = document.getElementById("chatContainer");
            chatContainer.classList.toggle("open");
        }

        function changeLanguage() {
            currentLanguage = document.getElementById("languageSelect").value;
            const translation = translations[currentLanguage];

            // Update UI elements
            document.getElementById("headerText").textContent = translation.header;
            document.getElementById("userInput").placeholder = translation.placeholder;
            document.getElementById("userInput").style.direction = currentLanguage === "fa" ? "rtl" : "ltr";
            document.querySelector("button").textContent = translation.sendButton;

            // Update quick questions
            const quickQuestionsDiv = document.getElementById("quickQuestions");
            quickQuestionsDiv.innerHTML = "";
            translation.quickQuestions.forEach(question => {
                const div = document.createElement("div");
                div.className = "quick-question";
                div.textContent = question;
                div.onclick = () => sendQuickQuestion(question);
                quickQuestionsDiv.appendChild(div);
            });
        }

        function typeMessage(message, element) {
            let i = 0;
            element.textContent = "";
            const typing = setInterval(() => {
                element.textContent += message[i];
                i++;
                if (i >= message.length) clearInterval(typing);
            }, 50);
        }

        function sendMessage() {
            const userInput = document.getElementById("userInput").value.trim();
            if (!userInput) return;

            // Display user message
            const chatBox = document.getElementById("chatBox");
            const userMessage = document.createElement("div");
            userMessage.className = "chat-message user-message";
            userMessage.textContent = userInput;
            chatBox.appendChild(userMessage);

            // Find appropriate response
            const responses = translations[currentLanguage].responses;
            let response = responses["default"];
            for (let key in responses) {
                if (userInput.toLowerCase().includes(key)) {
                    response = responses[key];
                    break;
                }
            }

            // Display bot response with typing animation
            const botMessage = document.createElement("div");
            botMessage.className = "chat-message bot-message";
            chatBox.appendChild(botMessage);
            typeMessage(response, botMessage);

            // Clear input and scroll to bottom
            document.getElementById("userInput").value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function sendQuickQuestion(question) {
            document.getElementById("userInput").value = question;
            sendMessage();
        }

        // Send message with Enter key
        document.getElementById("userInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });

        // Initialize UI with default language
        changeLanguage();
    