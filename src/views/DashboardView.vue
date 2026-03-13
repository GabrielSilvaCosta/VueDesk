<script setup lang="ts">
import { Plus, BookOpen, FormInput, User, Mail } from "lucide-vue-next";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import styles from "./DashboardView.module.css";

defineOptions({ name: "DashboardView" });
</script>

<template>
  <div :class="styles.page">
    <header :class="styles.pageHeader">
      <h1 :class="styles.pageTitle">
        Dashboard
      </h1>
      <BaseButton variant="primary">
        <Plus
          :class="styles.btnAddIcon"
          :size="14"
          aria-hidden="true"
        />
        Add New
      </BaseButton>
    </header>

    <div :class="styles.guiaWrap">
      <header :class="styles.guiaPageHeader">
        <div :class="styles.guiaBreadcrumb">
          <a
            href="#"
            :class="styles.guiaBreadcrumbLink"
          >Documentação Oficial</a>
        </div>
        <h2 :class="styles.guiaTitle">
          Component Library
        </h2>
        <p :class="styles.guiaSubtitle">
          Explore o ecossistema VueDesk: um conjunto de ferramentas para
          components
        </p>
      </header>

      <section :class="styles.section">
        <div :class="styles.sectionHeader">
          <BookOpen
            :size="20"
            aria-hidden="true"
          />
          <h3 :class="styles.sectionTitle">
            Buttons
          </h3>
        </div>
        <div :class="styles.card">
          <div :class="styles.buttonsGrid">
            <div :class="styles.buttonGroup">
              <span :class="styles.buttonLabel">Principal</span>
              <BaseButton variant="primary">
                Criar
              </BaseButton>
            </div>
            <div :class="styles.buttonGroup">
              <span :class="styles.buttonLabel">Secundário</span>
              <BaseButton variant="secondary">
                Cancelar
              </BaseButton>
            </div>
            <div :class="styles.buttonGroup">
              <span :class="styles.buttonLabel">Perigo</span>
              <BaseButton variant="danger">
                Excluir
              </BaseButton>
            </div>
          </div>
        </div>
      </section>

      <section :class="styles.section">
        <div :class="styles.sectionHeader">
          <FormInput
            :size="20"
            aria-hidden="true"
          />
          <h3 :class="styles.sectionTitle">
            Form Fields
          </h3>
        </div>
        <div :class="styles.card">
          <div :class="styles.formFieldsGrid">
            <div :class="styles.formFieldGroup">
              <BaseInput
                label="Nome de Usuário"
                placeholder="Digite seu nome"
                hint="Dica: Use um nome único para sua conta."
              >
                <template #icon>
                  <User
                    :size="20"
                    aria-hidden="true"
                  />
                </template>
              </BaseInput>
            </div>
            <div :class="styles.formFieldGroup">
              <BaseInput
                label="E-mail"
                model-value="usuario@invalido"
                error="Email inválido"
              >
                <template #icon>
                  <Mail
                    :size="20"
                    aria-hidden="true"
                  />
                </template>
              </BaseInput>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
